import { useState, useEffect } from "react";
import CardComp from "./CardComp";

export default function MainComp(){

    return (
        <>
            <main className="flex flex-wrap justify-around">
                <CardComp></CardComp>
            </main>
        </>
    )
}