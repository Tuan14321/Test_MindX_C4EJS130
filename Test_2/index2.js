function numberOneTriangle() {
    let display = document.getElementById('display').value;
    let n = Number(prompt("Enter size: "));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            document.writeln(" * ");
        }
        document.writeln("<br/>");
    }
}
numberOneTriangle();