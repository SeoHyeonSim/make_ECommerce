"use client";

import React from "react";

import { Image as ImageType } from "@/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GallaryTab from "./gallary-tab";
import Image from "next/image";

interface gallaryProps {
    images: ImageType[];
}

const Gallary: React.FC<gallaryProps> = ({ images }) => {
    return (
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none ">
                <TabList className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GallaryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
            <TabPanels className="aspect-square w-full">
                {images.map((image) => (
                    <TabPanel key={image.id}>
                        <div className="asepct-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image
                                fill
                                alt="Image"
                                src={image.url}
                                className="object-cover object-center"
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
};

export default Gallary;
