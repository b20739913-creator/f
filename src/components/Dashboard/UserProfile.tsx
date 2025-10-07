import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { User, Mail, Building2, ChevronRight } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getDisplayName = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user.username || user.email || 'User';
  };

  const displayName = getDisplayName();
  const initials = getInitials(displayName);

  return (
    <div
      className={`rounded-xl p-4 transition-all duration-200 hover:shadow-lg ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#162345] to-[#1a2a4d] border border-[#2a3a5c]'
          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#6656F5] to-[#8b7bff] text-white'
              : 'bg-gradient-to-br from-[#F97316] to-[#fb923c] text-white'
          }`}
        >
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={`text-base font-semibold truncate ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {displayName}
          </h3>

          <div className="flex flex-col gap-1 mt-1">
            {user.email && (
              <div className="flex items-center gap-1.5">
                <Mail
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <span
                  className={`text-xs truncate ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {user.email}
                </span>
              </div>
            )}

            {user.companyName && (
              <div className="flex items-center gap-1.5">
                <Building2
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <span
                  className={`text-xs truncate ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {user.companyName}
                </span>
              </div>
            )}
          </div>
        </div>

        <ChevronRight
          className={`w-5 h-5 flex-shrink-0 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}
        />
      </div>
    </div>
  );
};

export default UserProfile;
