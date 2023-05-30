

const MyProperties = () => {
    return (
        <div className="flex flex-col m-[100px] border rounded-xl w-60 bg-white absolute right-[-4.5rem] top-[-3rem] z-[1]">
            <p className="cursor-pointer hover:bg-slate-200 p-2 rounded-t-xl">Sign UP</p>
            <p className="cursor-pointer hover:bg-slate-200 p-2">Log IN</p>
            <hr/>
            <p className="cursor-pointer hover:bg-slate-200 p-2">Host your home</p>
            <p className="cursor-pointer hover:bg-slate-200 p-2">Host an experience</p>
            <p className="cursor-pointer hover:bg-slate-200 p-2 rounded-b-xl">Help</p>
        </div>
    );
};

export default MyProperties;