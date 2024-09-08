import { Button, Checkbox, Input } from "antd";
import Form from "./Form/index";
import { useEffect, useRef } from "react";
import { FormRefApi } from "./Form/Form";
import Greeting from "./Hook/Greeting";
import GreetingHook from "./Hook/GreetingHook";
import { ThemeContext,LocaleContext } from "./Hook/context";
import ContainerDemo from "./Container/demo";
// import ZustandDemo from './Flux/zustand/index'
import JotaiDemo from './Flux/jotai/index'

const Basic: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const form = useRef<FormRefApi>(null);

  return (
    <>
      <Button type="primary" onClick={() => {
        console.log(form.current?.getFieldsValue())
      }}>打印表单值</Button>

      <Button type="primary" onClick={() => {
        form.current?.setFieldsValue({
          username: '东东东'
        })
      }}>设置表单值</Button>

      <Form
        ref={form}
        initialValues={{ remember: true, username: '神说要有光' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: '请输入用户名!' },
            { max: 6, message: '长度不能大于 6' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item>
          <div>
            <Button type="primary" htmlType="submit" >
              登录
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

function App() {
  return (
    <div>
      {/* <ContainerDemo />
      <LocaleContext.Provider value="en">
        <ThemeContext.Provider value="light">
          <h2>GreetingClass</h2>
        <Greeting />
        <hr />
        <h2>GreetingHook</h2>
        <GreetingHook />
        </ThemeContext.Provider>
      </LocaleContext.Provider> */}
      {/* <ZustandDemo /> */}
      <JotaiDemo />
    </div>
  );
}

export default App;
