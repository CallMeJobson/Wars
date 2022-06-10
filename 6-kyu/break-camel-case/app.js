function solution(string) {
    let result = string.split(/(?=[A-Z])/).join(" ")
    return result
}
