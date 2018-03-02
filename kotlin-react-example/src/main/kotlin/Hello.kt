import kotlinext.js.js
import react.*
import react.dom.*
import kotlinx.html.*
import kotlin.browser.document

fun main(args: Array<String>) {
    render(document.getElementById("root")) {
        div {
            welcome("Mary")
        }
    }
}

interface WelcomeProps: RProps {
    var name: String
}

class Welcome(props: WelcomeProps) : RComponent<WelcomeProps, RState>(props){
    override fun RBuilder.render() {
        div {
            +"Hello, ${props.name}"
        }
    }
}

fun RBuilder.welcome(name: String = "John") = child(Welcome::class) {
    attrs.name = name
}