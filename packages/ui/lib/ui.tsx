import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { ItemsTab } from "./tabs/mhfdat/ItemsTab";
import { DatTemplateTab } from "./tabs/mhfdat/TemplateTab";

export function Ui() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemsTab />} />
        <Route path="/dat/items" element={<ItemsTab />} />
        <Route path="/dat/template" element={<DatTemplateTab />} />
      </Route>
    </Routes>
  );
}
