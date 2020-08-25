package com.employees.management.controller;

import com.employees.management.model.Employee;
import com.employees.management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //find all employees
    @GetMapping(value = "/getEmployees")
    private List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    //add employee
    @PostMapping(value = "/addEmployee")
    private Employee addEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    //update employee
    @PutMapping(value = "/updateEmployee")
    private Employee updateEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    //delete employee
    @DeleteMapping(value = "/delete/{id}")
    private void deleteEmployee(@PathVariable Integer id) {
        employeeRepository.deleteById(id);
    }
}
