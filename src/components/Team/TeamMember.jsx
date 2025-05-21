import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Copy,
  Edit,
  Mail,
  MoreHorizontal,
  Search,
  Shield,
  Trash,
  UserPlus,
} from "lucide-react";
import { teamMembers } from "./DummyData"; // Mock data

const TeamMember = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TabsContent value="members" className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Manage your team and their access
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" />
                <Input
                  placeholder="Search members..."
                  className="pl-8 w-full sm:w-[200px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="gap-1 cursor-pointer">
                <UserPlus className="h-4 w-4" />
                <span>Invite Member</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Articles</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No team members found matching your search
                  </TableCell>
                </TableRow>
              ) : (
                filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium text-sm">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.role === "Admin"
                            ? "default"
                            : member.role === "Editor"
                            ? "outline"
                            : "secondary"
                        }
                      >
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            member.status === "active"
                              ? "bg-green-500"
                              : member.status === "inactive"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="capitalize">{member.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.lastActive}</TableCell>
                    <TableCell>{member.articles}</TableCell>
                    <TableCell>{member.joined}</TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48" align="end">
                          <div className="space-y-1">
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2 h-8 cursor-pointer"
                            >
                              <Edit className="h-4 w-4" />
                              <span>Edit</span>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2 h-8 cursor-pointer"
                            >
                              <Mail className="h-4 w-4" />
                              <span>Email</span>
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-full justify-start gap-2 h-8 cursor-pointer"
                            >
                              <Shield className="h-4 w-4" />
                              <span>Permissions</span>
                            </Button>
                            <Separator />
                            <Button
                              variant="ghost"
                              className="w-full cursor-pointer justify-start gap-2 h-8 text-red-500 hover:text-red-500 hover:bg-red-50"
                            >
                              <Trash className="h-4 w-4" />
                              <span>Remove</span>
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Separator className="mb-4" />
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">
                Invite New Team Member
              </h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                />
                <Button disabled={!inviteEmail} className="cursor-pointer">
                  Send Invite
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">Team Invite Link</h3>
              <div className="flex gap-2">
                <Input
                  value="https://app.example.com/invite/team123"
                  readOnly
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Invitations</CardTitle>
          <CardDescription>
            Team members who haven't accepted their invites yet
          </CardDescription>
        </CardHeader>
       <CardContent>
  <div className="space-y-3">
    <div className="flex flex-wrap items-center justify-between p-3 border rounded-md gap-2">
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">David Rodriguez</p>
        <p className="text-sm text-muted-foreground truncate">
          david.r@example.com
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">SEO Specialist</Badge>
        <Button variant="outline" size="sm" className="cursor-pointer flex-shrink-0">
          Resend
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer flex-shrink-0">
          <Trash className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between p-3 border rounded-md gap-2">
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">Jessica Williams</p>
        <p className="text-sm text-muted-foreground truncate">
          jessica.w@example.com
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Writer</Badge>
        <Button variant="outline" size="sm" className="cursor-pointer flex-shrink-0">
          Resend
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer flex-shrink-0">
          <Trash className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>
  </div>
</CardContent>

      </Card>
    </TabsContent>
  );
};

export default TeamMember;
