

const ColorScheme = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-20">
        <div className="flex justify-center items-center gap-10 p-10">
            <span className="h-16 w-16 rounded-full bg-background border border-primary-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-primary-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-secondary"></span>
            <span className="h-16 w-16 rounded-full bg-primary"></span>
            <span className="h-16 w-16 rounded-full bg-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-secondary-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-muted"></span>
            <span className="h-16 w-16 rounded-full bg-muted-foreground"></span>
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
            <span className="h-16 w-16 rounded-full bg-accent"></span>
            <span className="h-16 w-16 rounded-full bg-accent-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-destructive"></span>
            <span className="h-16 w-16 rounded-full bg-destructive-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-border"></span>
            <span className="h-16 w-16 rounded-full bg-input"></span>
            <span className="h-16 w-16 rounded-full bg-ring"></span>
            
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
            <span className="h-16 w-16 rounded-full bg-card border border-primary-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-card-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-popover border border-primary-foreground"></span>
            <span className="h-16 w-16 rounded-full bg-popover-foreground"></span>
        </div>
    </div>
  )
}

export default ColorScheme