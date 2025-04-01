import React, { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { FaBuilding, FaRegEye } from "react-icons/fa6";
import { CgLogOff } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const OrganizationTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openOrgModal, setOpenOrgModal] = useState(false);
    const [typedOpt, setTypedOpt] = useState("");
    const [activate, setActivate] = useState(false);
    const [active, setActive] = useState({
        is_active: true,
    });

    const handleInput = (e) => {
        const inputText = e.target.value.trimStart();
        setTypedOpt(inputText);
        console.log(active.is_active);
        if (active.is_active === true) {
            if (inputText === "DEACTIVATE") {
                setActivate(false);
            } else {
                setActivate(true);
            }
        } else {
            if (inputText === "ACTIVATE") {
                setActivate(false);
            } else {
                setActivate(true);
            }
        }
    };

    const [focusedFields, setFocusedFields] = useState({});
    const handleFocus = (fieldName) => {
        setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
    };

    const handleBlur = (fieldName) => {
        setTypedOpt((prev) => prev.trim());
        setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
    };

    const organizations = [
        { id: "ORG001", name: "Tech Solutions", status: "Active", users: 25, createdAt: "2024-03-01" },
        { id: "ORG002", name: "Innovate Inc.", status: "Pending", users: 12, createdAt: "2024-02-15" },
        { id: "ORG003", name: "Alpha Group", status: "Inactive", users: 8, createdAt: "2023-12-10" },
    ];

    return (
        <div className="w-full bg-[#F5F5F5] flex justify-center items-center">
            <div className="px-5 mt-6 w-full max-w-6xl">
                <div className="p-6 border rounded-lg shadow-md bg-white">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-black font-bold text-[24px]">Manage Organization</h3>
                        {/* <button className="bg-blue-500 text-white px-4 h-[40px] rounded font-bold hover:bg-blue-600 lg:text-[14px] text-[12px]">
                            + Add New
                        </button> */}
                    </div>

                    {/* Search & Filter Section */}
                    <div className="flex justify-between items-center mb-4 p-3 rounded-md">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
                        </div>
                        <button className="ml-4 px-4 py-2 flex items-center gap-2 border border-gray-400 text-gray-500 font-semibold rounded-md hover:text-blue-500 hover:border-blue-500">
                            <FiFilter /> Filter
                        </button>
                    </div>

                    {/* Table (Large Screens) */}
                    <div className="hidden md:block overflow-hidden rounded-lg">
                        <table className="w-full border-collapse border border-gray-200 bg-white">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="p-3 text-left">ID</th>
                                    <th className="p-3 text-left">Organization Name</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Users</th>
                                    <th className="p-3 text-left">Created At</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizations.map((org) => (
                                    <tr key={org.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{org.id}</td>
                                        <td className="p-3">{org.name}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${org.status === "Active" ? "bg-green-100 text-green-600" :
                                                org.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                                                }`}>
                                                {org.status}
                                            </span>
                                        </td>
                                        <td className="p-3">{org.users}</td>
                                        <td className="p-3">{org.createdAt}</td>
                                        <td className="px-2 py-4 flex justify-start gap-2 items-center">
                                            <CiEdit className="cursor-pointer text-gray-600 font-semibold text-[17px] hover:text-blue-500" />
                                            <FaRegEye className="cursor-pointer text-gray-600 font-semibold text-[17px] hover:text-blue-500" />
                                            <CgLogOff className="cursor-pointer" onClick={() => setOpenOrgModal(true)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card Layout (Small Screens) */}
                    <div className="md:hidden flex flex-col gap-4">
                        {organizations.map((org) => (
                            <div key={org.id} className="p-4 border rounded-lg shadow-md bg-white">
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-lg text-gray-800">{org.name}</h4>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${org.status === "Active" ? "bg-green-100 text-green-600" :
                                        org.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"
                                        }`}>
                                        {org.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">ID: {org.id}</p>
                                <p className="text-gray-600">Users: {org.users}</p>
                                <p className="text-gray-600">Created At: {org.createdAt}</p>
                                <div className="mt-3 flex gap-3 text-gray-600">
                                    <CiEdit className="cursor-pointer text-lg hover:text-blue-500" />
                                    <FaRegEye className="cursor-pointer text-lg hover:text-blue-500" />
                                    <CgLogOff className="cursor-pointer" onClick={() => setOpenOrgModal(true)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {openOrgModal && (
                <>
                    <div className="fixed inset-0 z-[99999] bg-black opacity-75 flex justify-center items-center "></div>

                    {/* Delete popup modal */}
                    <div className="fixed inset-0 z-[999999] flex items-center justify-center">
                        <div className="transition-height overflow-hidden bg-[#faf5f5] dark:bg-lmaastrichtBlue relative w-[502px] h-[225px] rounded-md shadow-lg">
                            {/* Modal content */}
                            <div className="flex justify-between items-center border-b border-[#434445]">
                                <div className="pt-3  text-sm font-medium flex px-3 h-[40px] ">
                                    <FaBuilding className=" mr-2 text-[18px]" />{" "}
                                    {organizations.status !== "Active" ? (
                                        <span className="text-[16px]">Deactivate Organization</span>
                                    ) : (
                                        <span className="text-[16px]">Activate Organization</span>
                                    )}
                                </div>
                                <IoClose
                                    className="cursor-pointer flex text-[24px] px-1 pt-1"
                                    onClick={() => {
                                        setOpenOrgModal(false);
                                        // setTypedOpt("");
                                        // setActive(false)
                                    }}
                                />
                            </div>
                            {organizations.status !== "Active" ? (
                                <p className="text-[14px] font-normal p-4">
                                    This organization is Inactive and Activating this organization
                                    will restore member access and all associated features.
                                </p>
                            ) : (
                                <p className="text-[14px] font-normal p-4">
                                    This organization is active and Deactivating this organization
                                    will revoke member access, disable associated features, and
                                    restrict data changes.
                                </p>
                            )}

                            {organizations.status === "Active" ? (
                                <p className="text-[12px] text-[#3e4043] font-medium px-4">
                                    If you still wish to activate the organization type{" "}
                                    <span className="text-[#FFFFFF]">“ACTIVATE”</span>
                                </p>
                            ) : (
                                <p className="text-[12px] text-[#78869B] font-medium px-4">
                                    If you still wish to deactivate the organization type{" "}
                                    <span className="text-[#FFFFFF]">“DEACTIVATE”</span>
                                </p>
                            )}

                            <div className="w-full flex justify-start px-4 mt-4 items-center gap-2">
                                <div className="w-1/2 flex  justify-center items-center ">
                                    <div className={`relative w-full`}>
                                        <input
                                            type="text"
                                            placeholder=" "
                                            className={`w-full h-[40px] pr-3 text-sm rounded focus:outline-none placeholder-lightSlateGray  border focus:ring-0 focus:border-transparent relative`}
                                            onChange={(e) => handleInput(e)}
                                            value={typedOpt}
                                            onFocus={() => {
                                                handleFocus("is_active");
                                            }}
                                            onBlur={() => handleBlur("is_active")}
                                            id="name"
                                        />
                                        <label
                                            htmlFor="name"
                                            className={`absolute top-[11px] left-1 text-gray-400 transition-all duration-200 ${active.is_active || focusedFields["is_active"]
                                                ? "text-[10px] -translate-y-5 text-lightSlateGray bg-maastrichtBlue pl-1 pr-1"
                                                : "text-[14px]"
                                                }
                      
                      `}
                                        >
                                            {organizations.status !== "Active" ? "Deactivate" : "Activate"}
                                        </label>
                                    </div>
                                </div>
                                {organizations.status !== "Active" ? (
                                    <button
                                        disabled={activate}
                                        className={`text-[14px]  ${activate
                                            ? "bg-gray-600 text-white"
                                            : "bg-[hsl(124,30%,45%)] text-white"
                                            }  h-[40px] px-5 rounded`}
                                        onClick={() => {
                                            activeRequest();
                                            setOpenOrgModal(false);
                                            setTypedOpt(" ");
                                            getOrgList();
                                        }}
                                    >
                                        Activate Organization
                                    </button>
                                ) : (
                                    <button
                                        disabled={activate}
                                        className={`text-[14px] text-white ${activate ? "bg-gray-600" : "bg-[#F44336]"
                                            }  h-[40px] px-5 rounded`}
                                        onClick={() => {
                                            activeRequest();
                                            setOpenOrgModal(false);
                                            setTypedOpt(" ");
                                            getOrgList();
                                        }}
                                    >
                                        Deactivate Organization
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrganizationTable;
