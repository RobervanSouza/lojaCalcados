"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Categorias from "@/components/header/categorias";
import MaisVendidos from "@/components/maisVendidos/maisVendido";
import CalcadoMasculino from "@/components/masculino/masculino";
import { styled } from "styled-components";
import Link from "next/link";



export const StyledContainer = styled.div`
  padding: 1rem;
  height: min-content;
  gap: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default function Home() {
  return (
    <main>
      <MaisVendidos />
      <StyledContainer>
        <CalcadoMasculino />
      </StyledContainer>

    </main>
  );
}
