var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1441",
        "ok": "1441",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1517",
        "ok": "1517",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1578",
        "ok": "1578",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1590",
        "ok": "1590",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
    }
},
contents: {
"req_goto-home-page-66b3a": {
        type: "REQUEST",
        name: "Goto Home Page",
path: "Goto Home Page",
pathFormatted: "req_goto-home-page-66b3a",
stats: {
    "name": "Goto Home Page",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.056",
        "ok": "0.056",
        "ko": "-"
    }
}
    },"req_goto-plp-page-acf1d": {
        type: "REQUEST",
        name: "Goto PLP Page",
path: "Goto PLP Page",
pathFormatted: "req_goto-plp-page-acf1d",
stats: {
    "name": "Goto PLP Page",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.056",
        "ok": "0.056",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
