let student = [{
    "name": "niru",
    "age": 20,
    "lang": ["c", "python", "js"],
    "address": {
        "area": "bhepur",
        'city': "try",
        "state": "tn",
        "pincode": 620013,
    },
}];

// Use JSON.stringify to display the object as a string
document.write(JSON.stringify(student, null, 2)); // Pretty print with indentation

// Logging the 'lang' array in the console
console.log(student[0].lang);
