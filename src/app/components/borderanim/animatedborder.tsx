export function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ");
  }
  
interface BorderProps {
    children?: React.ReactNode
    className?: string
    from?: string
    to?: string
    stop?: string
}

export const AnimatedBorder = ({
    children,
    className,
    from,
    to,
    stop
}: BorderProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden p-[4px] card",
                className
            )}
        >
            <div
                style={{
                    backgroundImage: `conic-gradient(from 90deg at 50% 50%,${from} 0%,${to} 50%,${stop} 100%)`
                }}
                className="absolute inset-[-25%] animate-[spin_10s_linear_infinite] h-[80%]"
            />
            {children}
        </div>
    )
}
