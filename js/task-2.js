// haftalik toplamin gunluk ortalamasini verecek total/7 mi diyelim
// total / (girilen gun sayisi) dhaa dogru olur
function calcAverageCalories(days) {

    let totalCalories = 0;
    for (let i = 0; i < days.length; i++) {
        totalCalories = totalCalories + days[i].calories;
    }
    // bos dizi kontrolu yapilabilir.0a bolmeye calismasin
    if (days.length === 0) {
        return 0;
    }
    return totalCalories / days.length;
}


