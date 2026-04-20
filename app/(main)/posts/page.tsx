import Image from "next/image";
import Link from "next/link";

export default async function Page({params}: {params: {id: string} })
{
    console.log(params.id);
}
