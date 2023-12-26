/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

const MemberModal = ({ setLock, isToggled, toggle }) => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const memberLock = () => {
    if (isToggled == true && firstValue && secondValue) {
      setLock(false);
      toggle();
    }
  };

  addEventListener("keydown", (el) => {
    if (el.keyCode == 13) {
      memberLock();
    }
  });

  return (
    <>
      <Modal
        closable={false}
        className="member-modal"
        title={[
          <>
            <p className="member-modal__title">A`zo bo`lish</p>
          </>,
        ]}
        open={isToggled}
        footer={""}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            hasFeedback
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              value={firstValue}
              onChange={() => setFirstValue(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input
              size="large"
              value={secondValue}
              onChange={() => setSecondValue(event.target.value)}
            />
          </Form.Item>

          <div className="member-modal__buttons">
            <Button
              size="large"
              type="primary"
              onClick={memberLock}
              htmlType="submit"
              className="member-modal__submit"
            >
              Submit
            </Button>

            <Button
              size="large"
              onClick={toggle}
              className="member-modal__cancel"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default MemberModal;
