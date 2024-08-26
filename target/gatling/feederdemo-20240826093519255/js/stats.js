var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25",
        "ok": "25",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles1": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "percentiles2": {
        "total": "569",
        "ok": "569",
        "ko": "-"
    },
    "percentiles3": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.472",
        "ok": "0.472",
        "ko": "-"
    }
},
contents: {
"req_home-page-cfe6e": {
        type: "REQUEST",
        name: "Home Page",
path: "Home Page",
pathFormatted: "req_home-page-cfe6e",
stats: {
    "name": "Home Page",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles2": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles3": {
        "total": "447",
        "ok": "447",
        "ko": "-"
    },
    "percentiles4": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.189",
        "ok": "0.189",
        "ko": "-"
    }
}
    },"req_home-page-redir-1385c": {
        type: "REQUEST",
        name: "Home Page Redirect 1",
path: "Home Page Redirect 1",
pathFormatted: "req_home-page-redir-1385c",
stats: {
    "name": "Home Page Redirect 1",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles2": {
        "total": "579",
        "ok": "579",
        "ko": "-"
    },
    "percentiles3": {
        "total": "621",
        "ok": "621",
        "ko": "-"
    },
    "percentiles4": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.283",
        "ok": "0.283",
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
