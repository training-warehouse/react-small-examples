export function showNotification(setter) {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 2000)
}

export function checkWin(correct, wrong, word) {
    let status = 'win'

    // 验证是否获胜
    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = ''
        }
    })

    // 验证失败
    if (wrong.length === 6) {
        status = 'lost'
    }

    return status
}