import React from "react"
// import {codeWallpaper} from "./assets/codeWallpaper.png"

const codeWallpaper = require("./assets/codeWallpaper.png").default;
const dailyPlanner = require("./assets/dailyPlanner.png").default;
const FitnessApp = require("./assets/Fitness-Tracker.png").default;
const PWGen = require("./assets/PWGenerator.png").default;
const TimedQuiz = require("./assets/TimedQuiz.png").default;
const wrkWith = require("./assets/wrkwith.png").default;
const BookApp = require("./assets/bookapp.png").default;
const bdgTracker = require("./assets/budgetTracker.png").default;


const projects =  [
    {
        id: 1,
        project: "wrkwith-app",
        image: wrkWith,
        deployment: "https://wrkwith-app.herokuapp.com",
        repo: "https://github.com/wa20/wrkwith-app",
        detail: "A fully functioning website utilisng MVC model",

    },
    {
        id: 2,
        project: "BookApp",
        image: BookApp,
        deployment: "https://wa20.github.io/BookApp/",
        repo: "https://github.com/wa20/BookApp",
        detail: "",

    },
    {
        id: 3,
        project: "Node README Generator",
        image: codeWallpaper,
        deployment: "",
        repo: "https://github.com/wa20/7-README-Generator",
        detail: "",

    },
    {
        id: 4,
        project: "The Budget Tracker",
        image: bdgTracker,
        deployment: "https://thebudget-tracker.herokuapp.com",
        repo: "https://github.com/wa20/budget-tracker",
        detail: "",

    },
    {
        id: 5,
        project: "The Fitness Tracker",
        image: FitnessApp,
        deployment: "https://the-fitnesstracker.herokuapp.com/?id=60e43ebb51bc3a00155d11ac",
        repo: "https://github.com/wa20/the-fitness-tracker",
        detail: "",

    },

    {
        id: 6,
        project: "What is 'Regex'?",
        image: codeWallpaper,
        deployment: "",
        repo: "https://github.com/wa20/regex-tutorial",
        detail: "",

    },

    {
        id: 7,
        project: "Node Profile Generator",
        image: codeWallpaper,
        deployment: "",
        repo: "https://github.com/wa20/8-Team-Profile-Generator",
        detail: "",

    },
    {
        id: 8,
        project: "Ecom-site Backend",
        image: codeWallpaper,
        deployment: "",
        repo: "https://github.com/wa20/11-E-Commerce-Site",
        detail: "",

    },
    {
        id: 9,
        project: "Password Generator",
        image: PWGen,
        deployment: "https://wa20.github.io/3-Password-Generator/",
        repo: "https://github.com/wa20/3-Password-Generator",
        detail: "",

    },
    {
        id: 10,
        project: "Timed Quiz",
        image: TimedQuiz,
        deployment: "https://wa20.github.io/4-Timed-Quiz/",
        repo: "https://github.com/wa20/4-Timed-Quiz",
        detail: "",

    },
    {
        id: 11,
        project: "Daily Planner",
        image: dailyPlanner,
        deployment: "https://github.com/wa20/5-Daily-Planner/settings/pages",
        repo: "https://github.com/wa20/5-Daily-Planner",
        detail: "",

    },


]

export default projects