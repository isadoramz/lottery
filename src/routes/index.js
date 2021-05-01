import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Lottery from "../pages/lottery"
import Payment from "../pages/payment"

const Routes = () => {
	return (
		<BrowserRouter>
				<Switch>
						<Route path="/"  exact component={Lottery}/>
						<Route path="/pagamento" component={Payment}/>
				</Switch>
		</BrowserRouter>
	)
}

export default Routes;