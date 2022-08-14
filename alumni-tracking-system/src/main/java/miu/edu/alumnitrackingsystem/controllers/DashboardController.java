package miu.edu.alumnitrackingsystem.controllers;

import lombok.extern.slf4j.Slf4j;
import miu.edu.alumnitrackingsystem.dto.ChartsDto;
import miu.edu.alumnitrackingsystem.service.impl.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Access;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/dashboard")
@Slf4j

public class DashboardController {
    @Autowired
    private DashboardService dashboardService;
    @GetMapping("/get-chart-data")
    public ChartsDto getDashboardData(){
        log.info("Calling dashboard api");
        return dashboardService.getChartsData();

    }
}
