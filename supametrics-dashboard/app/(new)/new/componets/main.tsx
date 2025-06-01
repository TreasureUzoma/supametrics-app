"use client";

import { Form } from "../../components/Form";

import React from "react";

export const Main = () => {
  return (
    <main>
      <Form type="project" onSubmit={(data) => console.log(data)} />
    </main>
  );
};
