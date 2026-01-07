import { Drawer, Button } from "antd";
import { useState } from "react";

const DrawerTutorial = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
  title="User Details"
  placement="right"
  onClose={() => setOpen(false)}
  open={open}
  width={400}
  mask={false}
>
    <p>Name: John Doe</p>   
    <p>Age: 30</p>
    <p>Address: 123 Main St, Cityville</p>
</Drawer>

    </>
  );
};

export default DrawerTutorial;
