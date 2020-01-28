import { useState } from "react"

export default initialVal => {
  const [dialog, setDialog] = useState(initialVal || false);
  const handleDialogOpen = (e) => {
    console.log(e)
    setDialog(true);
  };
  const handleDialogClose = () => {
    setDialog(false);
  };
  return [dialog, handleDialogOpen, handleDialogClose]
}