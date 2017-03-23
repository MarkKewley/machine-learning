package com.markkewley.ml.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        // will look for index.html underneath /resources/template
        return "index";
    }

}