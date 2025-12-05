package www

import com.raquo.laminar.api.L.*
import org.scalajs.dom

def MainLaminarApp(): Unit = {
  val container = dom.document.getElementById("app")
  render(container, App()())
}
