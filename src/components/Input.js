import React, { useState } from "react";
import { View,Input } from "remax/one";

export default (props) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Input value={count} onInput={(e) => setCount(e.target.value)} />
    </View>
  );
};
