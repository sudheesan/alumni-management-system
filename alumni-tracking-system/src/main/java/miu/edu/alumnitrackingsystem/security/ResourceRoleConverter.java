package miu.edu.alumnitrackingsystem.security;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ResourceRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {
    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        final Map<String, List<String>> clientProperties = (Map<String, List<String>>) jwt.getClaims().get("resource_access");
        final Map<String, List<String>> roleAccess = (Map<String, List<String>>) clientProperties.get("React-Auth");
        if(roleAccess != null) {
            return roleAccess.get("roles")
                    .stream()
                    .map(roleName -> "ROLE_" + roleName) // prefix required by Spring Security for roles.
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
        }
        return null;
    }
}
