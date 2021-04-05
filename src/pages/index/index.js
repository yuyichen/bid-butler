import * as React from "react";
import { View, Text, Image, Form, Input, Label } from "remax/one";
import styles from "./index.css";
import { SchemaForm } from "@formily/react-schema-renderer";

export default () => {
  return (
    <View>
      <Form>
        <View className="flex">
          <Label>姓名：</Label>
          <Input className="flex-1" />
        </View>
      </Form>
    </View>
  );
};
