import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { splitBetweenData, expenseDataArray } from "../dummyData";
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import AddExpenseMain from './AddExpenseMain';

function AddExpense(props) {
  const {history, match} = props;
  const {path, params} = props.match;
  const {friendId, groupId} = params;
  const editMode = path === '/expense/:id/edit';
  const id = editMode ? props.match.params.id : "";
  const expenseData = expenseDataArray.find((v) => v.id === id)
  const splitMethod = editMode ? expenseData.splitMethod : "equally";
  const [splitBetween, setSplitBetween] = useState(editMode ? expenseData.splitBetween : splitBetweenData);
  const amount = editMode ? expenseData.amount : 0;
  const title = editMode ? expenseData.title : "";
  const {friend, group} = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPart();
  }, [])
  const fetchPart = async () => {
    const partResponse = await Axios.get(`${serverUrl}/${friend ? "friend" : "group"}/participants/${friend ? friendId : groupId}`, authHeader);
    const {participants} = partResponse.data;
    setSplitBetween(participants.map(p => (  { 
      user: p._id,
      name: p.name.full,
      picture: p.picture,
      enabled: true,
      percentage: 0,
      amount: 0,
      share: 0 
    })))
    setLoading(false);
  }
  return (
    <Container maxWidth='xs'>
      {!loading && 
        <AddExpenseMain
          splitBetween={splitBetween}
          splitMethod={splitMethod}
          editMode={editMode}
          history={history}
          friend={friend}
          amount={amount}
          currency="INR"
          group={group} 
          match={match} 
          title={title}  
          id={id}
        />
      }
    </Container>
  )
}

export default AddExpense
