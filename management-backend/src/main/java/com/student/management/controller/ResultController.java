package com.student.management.controller;

import com.student.management.model.Result;
import com.student.management.model.ResultResponse;
import com.student.management.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResultController {

    @Autowired
    private ResultService resultService;

    @PostMapping(path = "/addresult")
    @CrossOrigin(origins = "*")
    public Result addResult(@RequestBody Result result) {
        return resultService.addResult(result);
    }

    @GetMapping(path = "/result")
    @CrossOrigin(origins = "*")
    public List<ResultResponse> getResults() {
        return resultService.findAllResults();
    }

    @DeleteMapping(path = "/result/{id}")
    @CrossOrigin(origins = "*")
    public String deleteResult(@PathVariable @NonNull Long id) {
        return resultService.deleteResult(id);
    }
}
