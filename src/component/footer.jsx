"use client";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;
export default function FooterLayout() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
}
