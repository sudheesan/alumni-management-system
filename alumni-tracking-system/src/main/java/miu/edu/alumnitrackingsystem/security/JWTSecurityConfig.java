package miu.edu.alumnitrackingsystem.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

@Configuration
public class JWTSecurityConfig extends WebSecurityConfigurerAdapter {


    final JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests(authz -> authz
                        .antMatchers(HttpMethod.POST, "/api/v1/tests/notification").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/v1/**").hasRole("User")
                        .antMatchers(HttpMethod.POST, "/api/v1/**").hasAuthority("ADMIN")
                        .anyRequest().authenticated())
                .oauth2ResourceServer()
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()));
    }

    private Converter<Jwt, ? extends AbstractAuthenticationToken> jwtAuthenticationConverter() {
        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        jwtConverter.setJwtGrantedAuthoritiesConverter(new ResourceRoleConverter());
        return jwtConverter;
    }


}
