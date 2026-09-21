import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-14 items-center justify-center rounded-md text-sidebar-primary-foreground">
                <AppLogoIcon/>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate text-xl text-white leading-tight font-semibold">
                    W_TheCode
                </span>
            </div>
        </>
    );
}
