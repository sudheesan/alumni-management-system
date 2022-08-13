package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.ChartsDto;
import miu.edu.alumnitrackingsystem.service.impl.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Access;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/dashboard")

public class DashboardController {
    @Autowired
    private DashboardService dashboardService;
    @GetMapping("/get-chart-data")
    public ChartsDto getDashboardData(){
        return dashboardService.getChartsData();

    }
}
