'use client';

import { siteConfig } from '@/src/config/index';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathName = usePathname();

	return (
		<header className="w-full overflow-hidden">
			<div className="flex gap-1 h-[52px] lg:h-20 items-center container text-xs lg:text-lg">
				<Link href="/" className="shrink-0 grow-0  font-semibold">
					@jamesnguyendesign
				</Link>
				<nav className="flex-1">
					<ul className="flex items-center justify-end">
						{Object.keys(siteConfig.paths).map((item) => {
							const path =
								siteConfig.paths[
								item as keyof typeof siteConfig.paths
								];
							const isActive = pathName === '/' && path.href === '/'
								? true
								: pathName.startsWith(path.href) && path.href !== '/';

							return (
								<li
									key={path.as}
									className={cn(
										'px-2  lg:px-6',
										isActive
											? 'bg-gradient'
											: 'bg-transparent'
									)}
								>
									<Link
										href={path.href}
										className={cn("inline-block", isActive ? "font-bold" : "font-normal")}
									>
										{path.as}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
}
