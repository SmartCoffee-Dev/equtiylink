import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import { useWindowSize } from '@/modules/general/infraestructure/useWindowSize';
import { Navbar } from '@/modules/general/infraestructure/Navbar';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
	const { canViewInvoices } = usePage<PageProps>().props
	const [showingSidebar, setShowingSidebar] = useState(true);
	const { width } = useWindowSize()

	useEffect(() => {
		setShowingSidebar(width === undefined || width <= 720 ? false : true);
		return () => undefined
	}, [width])

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
			<aside className={`
			bg-gray-100 dark:bg-gray-900
				border-r border-gray-100 dark:border-gray-700
				transition-all ease-in-out
				flex-col p-4 gap-4
				absolute w-dvw z-10 h-dvh
				sm:static sm:flex sm:w-1/4 sm:z-0
				${showingSidebar ? 'flex' : 'hidden'}
				`}>

				<div className="flex items-center justify-between sm:justify-center w-full h-fit">

					<Link href="/dashboard" className='flex items-center gap-4 text-foreground'>
						<ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
						EquityLink
					</Link>

					<button
						onClick={() => setShowingSidebar(false)}
						className={`
							inline-flex sm:hidden items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out`}
					>
						<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{canViewInvoices &&
					<Link href={route('invoice.list')} className='text-foreground hover:opacity-80'>
						Facturas
					</Link>
				}

			</aside>

			<div className='w-dvw z-0'>

				<Navbar user={user} showingSidebar={showingSidebar} setShowingSidebar={setShowingSidebar} />

				{header && (
					<header className="bg-white dark:bg-gray-800 shadow">
						<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
					</header>
				)}

				<main className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>{children}</main>

			</div>
		</div>
	);
}
