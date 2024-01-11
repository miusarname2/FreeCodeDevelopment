import { dialog } from "@tauri-apps/api";
import { createDir, readDir } from "@tauri-apps/api/fs";
import { join } from "@tauri-apps/api/path";
import { useState } from "react";

export default function creationForm() {
  const [organization, setOrganization] = useState("organization-identifier");
  const [productName, setProductName] = useState("MyProject")
  const [bundleIdentify, setBundleIdentify] = useState("")
  const readDirRecursive = async (path: any) => {
    const dirContents = await readDir(path);

    const recursivePromises = dirContents.map(async (item) => {
      if (item.children && item.children.length >= 0) {
        // Si el elemento tiene hijos, realizar una llamada recursiva
        item.children = await readDirRecursive(item.path);
      }
      return item;
    });

    return Promise.all(recursivePromises);
  };

  const handleFileChange = async () => {
    let getDric = await dialog.open({ directory: true });
  const result = typeof getDric == "string" ? getDric : ""
  let fileDirect= await join(result);
  console.log( await fileDirect,"result");
  //const createdirect = await createDir()
  };

  const previousHref = (e: any) => {
    e.preventDefault();
    window.location.href = "/welcome";
  };
  const cancelHref = (e: any) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <>
      <div className="bg-[#1e1e1e] p-6 rounded-lg text-white w-full h-full">
        <h1 className="text-lg font-semibold mb-4">
          Choose options for your new project:
        </h1>
        <div className="bg-[#3c3c3c] p-4 rounded-lg mb-6">
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="product-name"
              >
                Product Name:
              </label>
              <input
                className="bg-[#2d2d2d] text-white border border-[#555] rounded px-2 py-1 w-full"
                id="product-name"
                placeholder="MyProject"
                type="text"
                value={productName}
                onChange={(e)=>{
                  setProductName(e.target.value)
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="team">
                Team:
              </label>
              <button className="bg-[#2d2d2d] text-white border border-[#555] rounded px-2 py-1 w-full text-left">
                Add account...
              </button>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="organization-identifier"
              >
                Organization Identifier:
              </label>
              <input
                className="bg-[#2d2d2d] text-white border border-[#555] rounded px-2 py-1 w-full"
                id="organization-identifier"
                placeholder="organization-identifier"
                type="text"
                value={organization}
                onChange={(e)=>{
                  setOrganization(e.target.value)
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="bundle-identifier"
              >
                Bundle Identifier:
              </label>
              <input
                className="bg-[#2d2d2d] text-white border border-[#555] rounded px-2 py-1 w-full"
                id="bundle-identifier"
                placeholder="OrganizationIdentifier.ProductName"
                type="text"
                value={bundleIdentify? bundleIdentify : `${organization}.${productName}`}
                onChange={(e)=>{
                  setBundleIdentify(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="storage"
              >
                Storage:
              </label>
              <select
                className="bg-[#2d2d2d] text-white border border-[#555] rounded px-2 py-1 w-full"
                id="storage"
              >
                <option>None</option>
                <option>Local</option>
                <option>Cloud</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="bg-[#2d2d2d] border border-[#555] rounded text-blue-500"
                id="host-in-cloudkit"
                type="checkbox"
              />
              <label className="text-sm font-medium" htmlFor="host-in-cloudkit">
                Host in CloudKit
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="bg-[#2d2d2d] border border-[#555] rounded text-blue-500"
                id="include-tests"
                type="checkbox"
              />
              <label className="text-sm font-medium" htmlFor="include-tests">
                Include Tests
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-[#3c3c3c] text-white px-4 py-2 rounded hover:bg-[#555] transition-colors"
            onClick={cancelHref}
          >
            Cancel
          </button>
          <div className="flex gap-2">
            <button
              className="bg-[#3c3c3c] text-white px-4 py-2 rounded hover:bg-[#555] transition-colors"
              onClick={previousHref}
            >
              Previous
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors" onClick={handleFileChange}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
