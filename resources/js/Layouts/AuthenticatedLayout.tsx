import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { useWindowSize } from '@/modules/general/infraestructure/useWindowSize';
import { Avatar } from '@nextui-org/react';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
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
				absolute w-dvw z-10 h-dvh
				sm:static sm:inline-flex sm:w-1/4 sm:z-0
				${showingSidebar ? 'inline-flex' : 'hidden'}
				`}>

				<div className="flex items-center justify-between sm:justify-center p-4 w-full h-fit">

					<Link href="/" className='flex items-center gap-4 text-foreground'>
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

			</aside>

			<div className='w-dvw z-0'>

				<nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between sm:justify-end h-16">

							<div className="-me-2 flex items-center sm:hidden">
								<button
									onClick={() => setShowingSidebar(true)}
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
								>
									<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path
											className={!showingSidebar ? 'inline-flex' : 'hidden'}
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>

							<div className="flex sm:items-center sm:ms-6">
								<div className="ms-3 relative">
									<Dropdown>
										<Dropdown.Trigger>
											<span className="inline-flex rounded-md">
												<button
													type="button"
													className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
												>

													<span className='hidden sm:inline-flex'>
														{user.name}
													</span>

													<Avatar className='inline-flex sm:hidden' name={user.name} />

													<svg
														className="ms-2 -me-0.5 h-4 w-4"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</span>
										</Dropdown.Trigger>

										<Dropdown.Content>
											<Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
											<Dropdown.Link href={route('logout')} method="post" as="button">
												Log Out
											</Dropdown.Link>
										</Dropdown.Content>
									</Dropdown>
								</div>
							</div>

						</div>
					</div>
				</nav>

				{header && (
					<header className="bg-white dark:bg-gray-800 shadow">
						<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
					</header>
				)}

				<main>{children}</main>

			</div>
		</div>
	);
}
