import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Sena from "../pages/sena"
import Payment from "../pages/payment"

const Routes = () => {
	return (
		<BrowserRouter>
				<Switch>
						<Route path="/"  exact component={Sena}/>
						<Route path="/pagamento" component={Payment}/>
				</Switch>
		</BrowserRouter>
	)
}

export default Routes;