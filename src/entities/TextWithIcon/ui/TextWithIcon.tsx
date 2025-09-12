import { cn } from '@/shared/lib/utils';

type TextWithIconProps = {
  children: React.ReactNode;
  icon: React.ReactNode | string;
  className?: string;
};

export function TextWithIcon({
  children,
  icon,
  className,
  ...props
}: TextWithIconProps) {
  return (
    <div className={cn('flex items-center gap-12', className)} {...props}>
      {typeof icon === 'string' ? (
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      ) : (
        icon
      )}
      <div className="font-medium">{children}</div>
    </div>
  );
}
