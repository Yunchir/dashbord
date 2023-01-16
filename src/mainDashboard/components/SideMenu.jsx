import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="sideMenu ">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Хянах самбар
      </button>
      <button
        onClick={() => {
          navigate("/Products");
        }}
      >
        Бүтээгдэхүүнүүд
      </button>
      <button
        onClick={() => {
          navigate("/Users");
        }}
      >
        Захиалгууд
      </button>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        Хэрэглэгчид
      </button>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        Модератор
      </button>
      <button
        onClick={() => {
          navigate("/Login");
        }}
      >
        Тохиргоо
      </button>
    </div>
  );
}
