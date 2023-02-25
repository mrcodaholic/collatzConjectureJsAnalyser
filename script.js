let cal_btn = document.getElementById("calculate")
let dow_btn = document.getElementById("download")
let table = document.getElementById("main")
let specific_inp = document.getElementById("spec")
let range_from = document.getElementById("range_1")
let range_to = document.getElementById("range_2")
let analyse_sel = document.getElementById("analyse")
let iterations = []
let to_show = document.getElementById("pattern_found")
function color_checked() {
    let display_colored_checked = document.getElementById("display_only_colored").value
    if (display_colored_checked === "1" || display_colored_checked === 1) {
        display_only_colored()
    }
}
function sno() {
    to_show.value = 0
    let th = document.getElementById("sno").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("sno_it_td")[0].innerHTML
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function numb() {
    to_show.value = 0
    let th = document.getElementById("numb").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function iterations_fun() {
    to_show.value = 0
    let th = document.getElementById("iterations").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td_display = document.getElementsByClassName("tr_data")[i].style.display
        let sno_td_html = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_it_td")[0].innerHTML
        document.getElementsByClassName("tr_data")[i].style.backgroundColor = `none`
        if (Number(th) === Number(sno_td_html)) {
            console.log("hey")
            if (sno_td_display !== "none") {
                to_show.value = Number(to_show.value) + 1
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                console.log(sno_td_html, sno_td_display)
                document.getElementsByClassName("tr_data")[i].style.backgroundColor = `${color}`
            }
        } else {
            document.getElementsByClassName("tr_data")[i].style.backgroundColor = ``
        }
    }
    color_checked()
}

function odd_it() {
    to_show.value = 0
    let th = document.getElementById("odd_it").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("odd_it_td")[0].innerHTML
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function even_it() {
    to_show.value = 0
    let th = document.getElementById("even_it").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("even_it_td")[0].innerHTML
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function first_below_step_i() {
    to_show.value = 0
    let th = document.getElementById("first_below_step").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML.split(", ")[0].split("Step: ")[1]
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function type_colored() {
    to_show.value = 0
    let th = document.getElementById("type_colored").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("type_it_td")[0].innerHTML.split("2^n")
        if (sno_td[1] !== "" && sno_td[1] !== " ") {
            sno_td = sno_td[1].split("* ")[1]
        } else {
            sno_td = "1"
        }
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function first_below_value() {
    to_show.value = 0
    let th = document.getElementById("first_below_value").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML.split(", ")[1].split("Value : ")[1]
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (th === sno_td) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
    }
    color_checked()
}
function all_it() {
    to_show.value = 0
    let th = document.getElementById("all_it").value
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
        let sno_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_iterations")[0].innerHTML.split(",")
        let sum = 0;
        for (let k = 0; k < sno_td.length; k++) {
            sum = sum + Number(sno_td[k])
        }
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
        if (Number(th) === Number(sum)) {
            to_show.value = Number(to_show.value) + 1
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
        }
        color_checked()
    }
}
function step_form_4n_3() {
    to_show.value = 0
    let th = document.getElementById("step_form_4n_3").value
    for (let k = 0; k < (document.getElementsByClassName("tr_data").length - 2); k++) {
        let sec = k + 1
        let third = k + 2
        let fourth = k + 3
        let first_step_td = document.getElementsByClassName("tr_data")[k].getElementsByClassName("first_below")[0].innerHTML
        let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
        let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
        let fourth_step_td = document.getElementsByClassName("tr_data")[fourth].getElementsByClassName("first_below")[0].innerHTML
        if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
            let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
            let step_four_value = fourth_step_td.split(", Value :")[0].split("Step: ")[1]
            let remainder = 0
            document.getElementsByClassName("tr_data")[fourth].style = `background-color: none;`
            console.log(step_four_value)
            for (let p = 0; p < Number(step_four_value); p++) {
                if (Number(step_four_value) > 30) {
                    remainder = Number(step_four_value) % 31
                    if (remainder === Number(th)) {
                        to_show.value = Number(to_show.value) + 1
                        remainder = 0;
                        document.getElementsByClassName("tr_data")[fourth].style = `background-color: ${color};`
                        break;
                    }
                }
                if (Number(step_four_value) < 31) {
                    remainder = Number(step_four_value)
                    if (remainder === Number(th)) {
                        to_show.value = Number(to_show.value) + 1
                        remainder = 0;
                        document.getElementsByClassName("tr_data")[fourth].style = `background-color: ${color};`
                        break;
                    }

                }

            }
            document.getElementsByClassName("tr_data")[k].style = `background-color: rgba(161, 152, 129, 0.158);`
            document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
            document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
            k = k + 2
        }
    }
    color_checked()

}
function display_only_colored() {
    to_show.value = 0
    let th = document.getElementById("display_only_colored").value
    if (Number(th) === 1 || Number(th) === "1") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
            if (document.getElementsByClassName("tr_data")[i].style.backgroundColor !== "" && document.getElementsByClassName("tr_data")[i].style.backgroundColor !== " " && document.getElementsByClassName("tr_data")[i].style.backgroundColor !== null && document.getElementsByClassName("tr_data")[i].style.backgroundColor !== 'rgba(161, 152, 129, 0.157)') {
                console.log(i, document.getElementsByClassName("tr_data")[i].style.backgroundColor)
            } else {
                document.getElementsByClassName("tr_data")[i].style = "display: none;"
            }
        }
    } else {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
            if (document.getElementsByClassName("tr_data")[i].style.display === "none") {
                document.getElementsByClassName("tr_data")[i].style = "display: table-row;"
            }
        }
    }
}
function analyse() {
    for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 1); i++) {
        document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
    }
    if (analyse_sel.value === "1") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 1); i++) {
            let sec = i + 1
            let first_odd_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("odd_it_td")[0].innerHTML
            let second_odd_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("odd_it_td")[0].innerHTML
            let first_total_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_it_td")[0].innerHTML
            let second_total_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("total_it_td")[0].innerHTML
            if (first_odd_td === second_odd_td && first_total_td === second_total_td) {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                i = i + 1
            }
        }
    } else if (analyse_sel.value === "2") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = sec + 1
            let first_odd_td_2 = document.getElementsByClassName("tr_data")[i].getElementsByClassName("odd_it_td")[0].innerHTML
            let second_odd_td_2 = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("odd_it_td")[0].innerHTML
            let third_odd_td_2 = document.getElementsByClassName("tr_data")[third].getElementsByClassName("odd_it_td")[0].innerHTML
            let first_total_td_2 = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_it_td")[0].innerHTML
            let second_total_td_2 = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("total_it_td")[0].innerHTML
            let third_total_td_2 = document.getElementsByClassName("tr_data")[third].getElementsByClassName("total_it_td")[0].innerHTML
            if (first_odd_td_2 === second_odd_td_2 && second_odd_td_2 === third_odd_td_2 && first_total_td_2 == second_total_td_2 && second_total_td_2 === third_total_td_2) {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                i = i + 2
            }
        }


    } else if (analyse_sel.value === "3") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 1); i++) {
            let initial_num = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (Number(initial_num) % 2 !== 0) {
                document.getElementsByClassName("tr_data")[i].style = `background-color: hwb(232deg 58% 0% / 21%);`
                let sec = i + 2
                let first_odd_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("odd_it_td")[0].innerHTML
                let second_odd_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("odd_it_td")[0].innerHTML
                let first_total_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_it_td")[0].innerHTML
                let second_total_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("total_it_td")[0].innerHTML
                if (first_odd_td === second_odd_td && first_total_td === second_total_td) {
                    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                    document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                    i = i + 2
                }
            }
        }
    } else if (analyse_sel.value === "4") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 1); i++) {
            let initial_num = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (Number(initial_num) % 2 === 0) {
                document.getElementsByClassName("tr_data")[i].style = `background-color: hwb(232deg 48% 0% / 21%);`
                let sec = i + 2
                let first_odd_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("odd_it_td")[0].innerHTML
                let second_odd_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("odd_it_td")[0].innerHTML
                let first_total_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("total_it_td")[0].innerHTML
                let second_total_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("total_it_td")[0].innerHTML
                if (first_odd_td === second_odd_td && first_total_td === second_total_td) {
                    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                    document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                    i = i + 2
                }
            }
        }
    } else if (analyse_sel.value === "5") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "6") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "7") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length); i++) {
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            let isPrime = true;
            if (Number(first_step_td) > 1) {
                for (let k = 2; k < Number(first_step_td); k++) {
                    if (Number(first_step_td) % k == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                    document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                } else {
                    document.getElementsByClassName("tr_data")[i].style = `background-color: none;`
                }
            }
        }
    } else if (analyse_sel.value === "8") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                i = i + 2
            }
        }

    } else if (analyse_sel.value === "9") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "16") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "10") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "11") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "12") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color:  rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (Number(first_n_td) % 5 === 0) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "13") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color:  rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (Number(first_n_td) % 3 === 0) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "14") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            let third_n_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color:  rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (Number(first_n_td) % 3 === 0) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                    }
                    if (Number(third_n_td) % 3 === 0) {
                        document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                    }

                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    } else if (analyse_sel.value === "15") {
        for (let i = 0; i < (document.getElementsByClassName("tr_data").length - 2); i++) {
            let sec = i + 1
            let third = i + 2
            let first_step_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("first_below")[0].innerHTML
            let second_step_td = document.getElementsByClassName("tr_data")[sec].getElementsByClassName("first_below")[0].innerHTML
            let third_step_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("first_below")[0].innerHTML
            let first_n_td = document.getElementsByClassName("tr_data")[i].getElementsByClassName("number_it_td")[0].innerHTML
            let third_n_td = document.getElementsByClassName("tr_data")[third].getElementsByClassName("number_it_td")[0].innerHTML
            if (first_step_td.split(", Value :")[0].split("Step: ")[1] === "1" && second_step_td.split(", Value :")[0].split("Step: ")[1] === "3" && third_step_td.split(", Value :")[0].split("Step: ")[1] === "1") {
                let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                for (let k = 2; k < Number(first_n_td); k = k * 2) {
                    document.getElementsByClassName("tr_data")[i].style = `background-color:  rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                    document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    if (Number(first_n_td) % 5 === 0) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: ${color};`
                    }
                    if (Number(third_n_td) % 5 === 0) {
                        document.getElementsByClassName("tr_data")[third].style = `background-color: ${color};`
                    }
                    if (k * 2 === Number(first_n_td)) {
                        document.getElementsByClassName("tr_data")[i].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[sec].style = `background-color: rgba(161, 152, 129, 0.158);`
                        document.getElementsByClassName("tr_data")[third].style = `background-color: rgba(161, 152, 129, 0.158);`
                    }
                }
                i = i + 2
            }
        }
    }
    let display_colored_checked = document.getElementById("display_only_colored").value
    if (display_colored_checked === "1" || display_colored_checked === 1) {
        display_only_colored()
    }
}
function change_1() {
    if (specific_inp.value !== null && specific_inp.value !== "" && specific_inp.value !== undefined) {
        range_from.value = ""
        range_to.value = ""
    }
}
function change_2() {
    if (range_from.value !== null && range_from.value !== "" && range_from.value !== undefined || range_to.value !== null && range_to.value !== "" && range_to.value !== undefined) {
        specific_inp.value = ""
    }
}
function calculate() {
    let n
    let n_2
    if (n === 1 || n_2 === 2 || n_2 === 1) {
        return
    }
    if (specific_inp.value !== null && specific_inp.value !== "" && specific_inp.value !== undefined) {
        n = specific_inp.value
        n_2 = ""
    } else if (range_from.value !== null && range_from.value !== "" && range_from.value !== undefined && range_to.value !== null && range_to.value !== "" && range_to.value !== undefined) {
        n = range_from.value
        n_2 = range_to.value
    } else {
        alert("Select a specific or range first")
        n = ""
        n_2 = ""
    }
    if (n_2 === "") {
        calculation_1(n)
    } else {
        calculation_2(n, n_2)
    }
}
let spec_total_iterations = 0
let total_odd_iterations = 0
let total_even_iterations = 0
let s_no = 0

let range_num
let first_below_numb = 0
let first_below_step = 0
let first_set = false
function calculation_1(n, gb) {
    let given_n;
    let global_numb;
    iterations.push(n)
    if (specific_inp.value === null || specific_inp.value === "" || specific_inp.value === undefined) {
        global_numb = gb
    } else if (specific_inp.value !== null && specific_inp.value !== "" && specific_inp.value !== undefined) {
        global_numb = specific_inp.value;
    }
    if (n < range_num) {
        if (first_set === false) {
            first_below_numb = n
            first_below_step = spec_total_iterations
            first_set = true
        }
    }
    if (n === 1) {
        if (specific_inp.value === null || specific_inp.value === "" || specific_inp.value === undefined) {
            let type = "nothing"
            let numb = range_num
            for (let i = 0; i < range_num; i++) {
                if (numb % 2 === 0) {
                    numb = numb / 2
                } else if (numb === "1" || numb === 1) {
                    type = `2^n`
                    break
                } else if (numb % 2 === 1) {
                    type = `2^n * ${numb}`
                    break
                }
            }
            table.innerHTML += `<tr class="tr_data"><td class="sno_it_td">${s_no}</td><td class="number_it_td">${range_num}</td><td class="type_it_td">${type}</td><td class="total_it_td">${spec_total_iterations}</td><td class="odd_it_td">${total_odd_iterations}</td><td class="even_it_td">${total_even_iterations}</td><td class="first_below">${"Step: " + first_below_step + ", Value : " + first_below_numb}</td><td class="total_iterations">${String(iterations)}</td></tr>`
        } else if (specific_inp.value !== null && specific_inp.value !== "" && specific_inp.value !== undefined) {
            let type = "nothing"
            let numb = global_numb
            for (let i = 0; i < global_numb; i++) {
                console.log(numb)
                if (numb % 2 === 0) {
                    numb = numb / 2
                }
                if (global_numb === "1" || global_numb === 1) {
                    type = `2^n`
                    break
                }
                if (numb % 2 === 1) {
                    type = `2^n * ${numb}`
                    break
                }
                console.log(numb)
            }
            table.innerHTML = `<tr><th>S.no</th><th>Number[ n ]</th><th>Type</th><th>Total Iterations</th><th>Odd Iterations [3n + 1]</th><th>Even Iterations [n / 2]</th><th class="head_all_iterations">All Iterations</th></tr ><tr class="tr_data"><td class="sno_it_td">1</td><td class="number_it_td">${global_numb}</td><td class="type_it_td">${type}</td><td class="total_it_td">${spec_total_iterations}</td><td class="odd_it_td">${total_odd_iterations}</td><td class="even_it_td">${total_even_iterations}</td><td class="first_below">Step: ${first_below_step}, Value : ${first_below_numb}</td><td class="total_iterations">${String(iterations)}</td></tr>`
        }
        global_numb = ""
        spec_total_iterations = 0
        total_even_iterations = 0
        total_odd_iterations = 0
        first_set = false
        first_below_numb = ""
        first_below_step = ""
        iterations = []
        return
    }
    if (n % 2 == 0) {
        given_n = n / 2
        spec_total_iterations += 1
        total_even_iterations += 1
        calculation_1(given_n)
    } else if (n % 2 !== 0) {
        given_n = 3 * n + 1
        spec_total_iterations += 1
        total_odd_iterations += 1
        calculation_1(given_n)
    }
}
function calculation_2(n, n_2) {
    table.innerHTML = "<tr><th>S.no</th><th>Number[ n ]</th><th>Type</th><th>Total Iterations</th><th>Odd Iterations [3n + 1]</th><th>Even Iterations [n / 2]</th><th>First Below given number</th><th class='head_all_iterations'>All Iterations</th></tr >"
    s_no = 1
    for (let i = n; i < (Number(n_2) + 1); i++) {
        range_num = i
        calculation_1(i, i)
        s_no = s_no + 1
    }
}
