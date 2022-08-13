package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChartsDto {
    private Map<String, Integer> jobsByTag;
    private Map<String, Long> jobsByCity;
    private Map<String, Long> jobsByState;
    private Map<String, Long> studentsByState;
    private Map<String, Long> studentsByCity;
}
