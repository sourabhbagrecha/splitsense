import React from 'react';
import { currencies } from "./currencyData"
import { red, green } from '@material-ui/core/colors';

const balanceMsg = (amount, currency="INR", thirdPerson=true, noColor=false) => {
  const positive = amount >= 0;
  const currencySymbol = currencies.find(c => c.code === currency).symbol;
  const styles = {
    color: !noColor ? (!positive ? red[700] : green[600]): "inherit",
    fontSize: 'inherit'
  }
  return <span style={styles}>{!positive ? thirdPerson ? `owes`: `owe` : `will get back`}  {currencySymbol} {!positive ? -1 * amount: amount}</span>
}

const settleUpMsg = (amount, currency="INR", noColor=false) => {
  const positive = amount >= 0;
  const currencySymbol = currencies.find(c => c.code === currency).symbol;
  const styles = {
    color: !noColor ? (!positive ? red[700] : green[600]): "inherit",
    fontSize: 'inherit'
  }
  return <span style={styles}>{!positive ? `You owe` : `Owes you`} {currencySymbol} {!positive ? -1 * amount: amount}</span>
}

export {balanceMsg, settleUpMsg};