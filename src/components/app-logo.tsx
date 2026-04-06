import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-16 items-center justify-center rounded-md text-sidebar-primary-foreground">
                <AppLogoIcon className="size-76 fill-current " />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate text-xl text-[#1a2121] leading-tight font-semibold">
                    W_TheCode
                </span>
            </div>
        </>
    );
}
