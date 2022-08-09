package miu.edu.alumnitrackingsystem.interceptors;

import lombok.RequiredArgsConstructor;
import miu.edu.alumnitrackingsystem.service.UserService;
import miu.edu.alumnitrackingsystem.util.UserType;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Aspect
@Component
@RequiredArgsConstructor
public class UserExistenceInterceptor {

    private final UserService userService;

    @Pointcut("@annotation(org.springframework.web.bind.annotation.GetMapping)")
    public void getMethod() {
    }

    @Pointcut("@annotation(org.springframework.web.bind.annotation.PostMapping)")
    public void postMethod() {
    }

    @Pointcut("@annotation(org.springframework.web.bind.annotation.PutMapping)")
    public void putMethod() {
    }

    @Pointcut("@annotation(org.springframework.web.bind.annotation.DeleteMapping)")
    public void deleteMethod() {
    }

    @Before("getMethod() || postMethod() || deleteMethod() || putMethod() ")
    public void filterProfanityText(JoinPoint joinPoint) throws Throwable {
        var tokenValues = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println("token values " + tokenValues.getClaims().toString());
        String email = tokenValues.getClaim("email");
        String firstName = tokenValues.getClaim("given_name");
        String lastName = tokenValues.getClaim("family_name");
        Map<String, List<String>> clientProperties = (Map<String, List<String>>) tokenValues.getClaims().get("resource_access");
        Map<String, List<String>> roleAccess = (Map<String, List<String>>) clientProperties.get("amp-client");
        List<String> roleList = new ArrayList<>();
        if (roleAccess != null) {
            roleList = roleAccess.get("roles").stream().collect(Collectors.toList());
        }

        if (!roleList.isEmpty()) {
            UserType userType = null;
            if (roleList.contains("Admin")) {
                userType = UserType.Admin;
            } else {
                for (String role : roleList) {
                    if (role.equals("Student")) {
                        userType = UserType.Student;
                    } else if (role.equals("Faculty")) {
                        userType = UserType.Faculty;
                    }
                }
            }
            var x = userService.getUserByEmailAndRole(email, firstName, lastName, userType);
        }
    }
}
