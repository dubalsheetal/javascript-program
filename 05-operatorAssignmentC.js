function studentInfo(gradScore, hscScore, sscScore, candidateName) {
    var result = gradScore >= 70 || hscScore >= 80 || sscScore >= 90
        ? `Congrates ${candidateName} you are eligible for TCS interview`
        : `Unfortunately ${candidateName}  are not eligible for interview`
    console.log(result);
}
studentInfo(80, 96, 90, "Sheetal");
studentInfo(70, 65, 55, "Shree");
studentInfo(60, 79, 88, "Jaya");