document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // BMI 계산
    const bmi = weight / ((height / 100) ** 2);
    let bmiCategory, bmiMessage, bmiImageSrc;

    if (bmi < 18.5) {
        bmiCategory = "저체중";
        bmiMessage = "밥 많이 묵자 ㅋ";
        bmiImageSrc = "images/bmi01.png"; // 실망한 표정
    } else if (bmi < 23) {
        bmiCategory = "정상";
        bmiMessage = "아주 좋아 ^^";
        bmiImageSrc = "images/bmi02.png"; // 윙크하는 표정
    } else if (bmi < 25) {
        bmiCategory = "과체중";
        bmiMessage = "비만 초기단계, 그만 묵자!";
        bmiImageSrc = "images/bmi03.png"; // 당황한 표정
    } else if (bmi < 30) {
        bmiCategory = "1단계 비만";
        bmiMessage = "늦기전에 운동하자 ㅜㅜ";
        bmiImageSrc = "images/bmi04.png"; // 눈물 흘리는 표정
    } else if (bmi < 35) {
        bmiCategory = "2단계 비만";
        bmiMessage = "고혈압, 당뇨병을 친구로?";
        bmiImageSrc = "images/bmi05.png"; // 놀란 표정
    } else {
        bmiCategory = "초고도 비만";
        bmiMessage = "죽을 각오로 살을 빼자, 제발!!";
        bmiImageSrc = "images/bmi06.png"; // 슬픈 표정
    }
    
    // 맞춤 셔츠 사이즈 계산
    const neckSize = 13.7 + (weight - 52) / 10;
    const shoulderWidth = 16 + (height - 150) / 10;
    const sleeveLength = 23 + (height - 163) / 10;
    const chestSize = 38 + (weight - 50) / 5;
    const waistSize = 35.5 + (weight - 50) / 5;
    const shirtLength = 28.3 + (height - 156) / 10;
    
    // 결과 표시
    document.getElementById('customerName').textContent = name;
    document.getElementById('neckSize').innerHTML = `${neckSize.toFixed(1)} inch<br>${(neckSize * 2.54).toFixed(1)} cm`;
    document.getElementById('shoulderWidth').innerHTML = `${shoulderWidth.toFixed(1)} inch<br>${(shoulderWidth * 2.54).toFixed(1)} cm`;
    document.getElementById('sleeveLength').innerHTML = `${sleeveLength.toFixed(1)} inch<br>${(sleeveLength * 2.54).toFixed(1)} cm`;
    document.getElementById('chestSize').innerHTML = `${chestSize.toFixed(1)} inch<br>${(chestSize * 2.54).toFixed(1)} cm`;
    document.getElementById('waistSize').innerHTML = `${waistSize.toFixed(1)} inch<br>${(waistSize * 2.54).toFixed(1)} cm`;
    document.getElementById('shirtLength').innerHTML = `${shirtLength.toFixed(1)} inch<br>${(shirtLength * 2.54).toFixed(1)} cm`;
    
    document.getElementById('bmiScore').textContent = bmi.toFixed(1);
    document.getElementById('bmiCategory').textContent = bmiCategory;
    document.getElementById('bmiMessage').textContent = bmiMessage;
    document.getElementById('bmiImage').innerHTML = `<img src="${bmiImageSrc}" alt="${bmiCategory}" class="bmi-emoji">`;
    
    document.getElementById('results').style.display = 'block';
});

document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`결과가 ${email}로 전송되었습니다. (실제로 전송되지 않음)`);
});