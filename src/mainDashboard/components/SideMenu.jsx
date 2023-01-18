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
        Хэрэглэгчид
      </button>
      <button
        onClick={() => {
          navigate("/Orders");
        }}
      >
        Захиалгууд
      </button>
      <button
        onClick={() => {
          navigate("/Moderator");
        }}
      >
        Модератор
      </button>
      <button
        onClick={() => {
          navigate("/Settings");
        }}
      >
        Тохиргоо
      </button>
    </div>
  );
}
