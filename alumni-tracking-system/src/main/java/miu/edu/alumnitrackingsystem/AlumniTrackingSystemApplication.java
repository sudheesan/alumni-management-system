package miu.edu.alumnitrackingsystem;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AlumniTrackingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlumniTrackingSystemApplication.class, args);
	}

	@Bean
	public ModelMapper getMapper(){
		return new ModelMapper();
	}

}
